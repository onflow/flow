import com.google.protobuf.gradle.*
import com.vanniktech.maven.publish.SonatypeHost

fun getProp(name: String, defaultValue: String? = null): String? {
    return project.findProperty("flow.$name")?.toString()?.trim()?.ifBlank { null }
            ?: project.findProperty(name)?.toString()?.trim()?.ifBlank { null }
            ?: defaultValue
}

// configuration variables
val defaultGroupId = "org.onflow"
val defaultVersion = "1.0.0"

group = getProp("groupId", defaultGroupId)!!
version = when {
    getProp("version") !in setOf("unspecified", null) -> { getProp("version")!! }
    getProp("snapshotDate") != null -> { "${defaultVersion.replace("-SNAPSHOT", "")}.${getProp("snapshotDate")!!}-SNAPSHOT" }
    else -> { defaultVersion }
}

plugins {
    id("com.google.protobuf") version "0.9.4"
    kotlin("jvm") version "1.9.22"
    `java-library`
    `maven-publish`
    signing
    id("io.github.gradle-nexus.publish-plugin") version "1.0.0"
    id ("com.vanniktech.maven.publish") version "0.28.0"
}

val protobufVersion = "3.14.0"
val grpcVersion = "1.35.0"

dependencies {
    api("com.google.protobuf:protobuf-java:$protobufVersion")
    api("io.grpc:grpc-netty-shaded:$grpcVersion")
    api("io.grpc:grpc-protobuf:$grpcVersion")
    api("io.grpc:grpc-stub:$grpcVersion")
    api("javax.annotation:javax.annotation-api:1.3.2")
}

java {
    sourceCompatibility = JavaVersion.VERSION_20
    targetCompatibility = JavaVersion.VERSION_20
}

tasks {
    mavenPublishing {
        publishToMavenCentral(SonatypeHost.DEFAULT, true)

        coordinates(group.toString(), "flow", version.toString())

        signAllPublications()

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

signing {
    if (getProp("signing.key") != null) {
        useInMemoryPgpKeys(getProp("signing.key"), getProp("signing.password"))
    } else {
        useGpgCmd()
    }
    sign(publishing.publications)
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

repositories {
    mavenCentral()
}

