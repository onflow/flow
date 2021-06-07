import com.google.protobuf.gradle.*


plugins {
    id("com.google.protobuf") version "0.8.15"
    `java-library`
    `maven-publish`
    signing
    id("io.github.gradle-nexus.publish-plugin") version "1.0.0"
}

val protobufVersion = "3.14.0"
val grpcVersion = "1.35.0"

protobuf {
    protoc {
        artifact = "com.google.protobuf:protoc:$protobufVersion"
    }
    plugins {
        id("grpc") {
            artifact = "io.grpc:protoc-gen-grpc-java:$grpcVersion"
        }
    }
    generateProtoTasks {
        all().forEach {
            it.plugins {
                id("grpc")
            }
        }
    }
}

dependencies {
    api("com.google.protobuf:protobuf-java:$protobufVersion")
    api("io.grpc:grpc-netty-shaded:$grpcVersion")
    api("io.grpc:grpc-protobuf:$grpcVersion")
    api("io.grpc:grpc-stub:$grpcVersion")
    api("javax.annotation:javax.annotation-api:1.3.2")
}

nexusPublishing {
    repositories {
        sonatype()
    }
}

publishing {
    publications {
        create<MavenPublication>("mavenJava") {
            from(components["java"])

            pom {
                licenses {
                    license {
                        name.set("The Apache License, Version 2.0")
                        url.set("http://www.apache.org/licenses/LICENSE-2.0.txt")
                    }
                }
                name.set(project.name)
                url.set("https://onflow.org")
                description.set("The Flow Blockchain")
                scm {
                    url.set("https://github.com/onflow/flow")
                    connection.set("scm:git:git@github.com/onflow/flow.git")
                    developerConnection.set("scm:git:git@github.com/onflow/flow.git")
                }
                developers {
                    developer {
                        name.set("Flow Developers")
                        url.set("https://onflow.org")
                    }
                }
            }
        }
    }
}

signing {
    useGpgCmd() //use gpg2
    sign(publishing.publications["mavenJava"])
}

sourceSets {
    main {
        proto {
            // protobuf files must be defined in this dir, but using default filters
            // will include build dir, so we override inclusion pattern while maintaining
            // proto root dir
            srcDirs("$projectDir/")
            setIncludes(listOf("flow/**/*.proto"))
        }
    }
}

java {
    withJavadocJar()
    withSourcesJar()
}

tasks.compileJava {
    sourceCompatibility = "1.8"
    targetCompatibility = "1.8"
}

repositories {
    mavenCentral()
}

group = "org.onflow"

// TODO - grab version from Git
version = "0.21"
