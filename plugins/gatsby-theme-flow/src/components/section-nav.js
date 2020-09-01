import PropTypes from 'prop-types';
import React, {useEffect, useState} from 'react';
import Slugger from 'github-slugger';
import striptags from 'striptags';
import styled from '@emotion/styled';
import useWindowScroll from 'react-use/lib/useWindowScroll';
import useWindowSize from 'react-use/lib/useWindowSize';
import {theme} from '../colors';
import {trackCustomEvent} from 'gatsby-plugin-google-analytics';

const StyledList = styled.ul({
  marginLeft: 0,
  marginBottom: 48,
  overflow: 'auto'
});

const StyledListItem = styled.li(props => ({
  listStyle: 'none',
  fontSize: '1rem',
  lineHeight: 'inherit',
  color: props.active && theme.primary,
  a: {
    color: 'inherit',
    textDecoration: 'none',
    ':hover': {
      opacity: theme.hoverOpacity
    }
  }
}));

function handleHeadingClick(event) {
  trackCustomEvent({
    category: 'Section Nav',
    action: 'Heading click',
    label: event.target.innerText
  });
}

function slugifyHeadings(headings) {
  const slugger = new Slugger();

  return headings.map(({value}) => {
    const text = striptags(value);
    const slug = slugger.slug(text);

    return { text, slug };
  });
}

export default function SectionNav(props) {
  const {y} = useWindowScroll();
  const {width, height} = useWindowSize();
  const [offsets, setOffsets] = useState([]);

  const {contentRef, imagesLoaded} = props;

  useEffect(() => {
    const headings = contentRef.current.querySelectorAll('h1, h2');
    setOffsets(
      Array.from(headings)
        .map(heading => {
          const anchor = heading.querySelector('a');
          if (!anchor) {
            return null;
          }

          return {
            id: heading.id,
            offset: heading.offsetTop,
          };
        })
        .filter(Boolean)
    );
  }, [width, height, contentRef, imagesLoaded]);

  const headings = slugifyHeadings(props.headings);
  const slugs = headings.map(({slug}) => slug);

  let activeHeading = null;
  const windowOffset = height / 2;
  const scrollTop = y + windowOffset;
  
  for (let i = offsets.length - 1; i >= 0; i--) {
    const {id, offset} = offsets[i];

    if (!slugs.includes(id)) {
      continue;
    }

    if (scrollTop >= offset) {
      activeHeading = id;
      break;
    }
  }

  return (
    <StyledList>
      {headings.map(({slug, text}) => {
        return (
          <StyledListItem key={slug} active={slug === activeHeading}>
            <a href={`#${slug}`} onClick={handleHeadingClick}>
              {text}
            </a>
          </StyledListItem>
        );
      })}
    </StyledList>
  );
}

SectionNav.propTypes = {
  headings: PropTypes.array.isRequired,
  imagesLoaded: PropTypes.bool.isRequired,
  contentRef: PropTypes.object.isRequired
};
