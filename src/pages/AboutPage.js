import React from 'react'
import styled from 'styled-components'
import { PageHero } from '../components'
import aboutImg from '../assets/hero-bcg.jpeg'

const AboutPage = () => {
  return <main>
    <PageHero title="about" />
    <Wrapper className='page section section-center'>
      <img src={aboutImg} alt='img' />
      <article>
        <div className='title' >
          <h2>
            our story
          </h2>
          <div className='underline'></div>
          <p>
            In computing, a virtual machine (VM) is the virtualization or emulation of a computer system.
            Virtual machines are based on computer architectures and provide the functionality of a physical computer.
            Their implementations may involve specialized hardware, software, or a combination of the two. Virtual machines
            differ and are organized by their function, shown her
          </p>
        </div>
      </article>
    </Wrapper>
  </main>
}

const Wrapper = styled.section`
  display: grid;
  gap: 4rem;
  img {
    width: 100%;
    display: block;
    border-radius: var(--radius);
    height: 500px;
    object-fit: cover;
  }
  p {
    line-height: 2;
    max-width: 45em;
    margin: 0 auto;
    margin-top: 2rem;
    color: var(--clr-grey-5);
  }
  .title {
    text-align: left;
  }
  .underline {
    margin-left: 0;
  }
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
`
export default AboutPage
