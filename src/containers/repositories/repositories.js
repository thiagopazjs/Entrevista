import React from 'react'

import styled from 'styled-components'

import Icons from '../../components/icons'
import Typography from '../../components/typography'

import colors from '../../utils/colors'

const StyledRepository = styled.div`
  width: 750px;
  padding-left: 5px;
  background-color: ${colors.light}
`
const StyledRepoName = styled.div`
  height: 40px;
  font-size: 35px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  overflow: hidden;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`
const StyledDescription = styled.div`
  padding-top: 2px;
  height: 25px;
  font-size: 20px;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`
const StyledStars = styled.span`
  padding-top: 12px;
  margin-bottom: 30px;
  display: flex;
  align-content: center;
`
const StyledSpan = styled.span`
  margin-left: 10px;
  height: 22px;
  font-size: 20px;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
`
const StyledLink = styled.a`
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`

const Repositories = ({ repositories = [] }) => {
  const Repository = ({
    repositoryName = '--',
    repositoryLink = '--',
    description = '--',
    stars = '--'
  }) => {
    return (
      <StyledRepository>

        <StyledRepoName>
          <StyledLink
            href={repositoryLink}
            target='_blank'
            rel='noopener noreferrer'
            title={repositoryName}
          >
            <Typography.Regular
              color={colors.font.title}
              children={repositoryName}
            />
          </StyledLink>
        </StyledRepoName>

        <StyledDescription title={description}>
          <Typography.Regular children={description} />
        </StyledDescription>

        <StyledStars>
          <Icons.Star />
          <StyledSpan>
            <Typography.Muted children={stars} />
          </StyledSpan>
        </StyledStars>

      </StyledRepository>
    )
  }

  return (
    <>
      {repositories.map((item, index) => {
        const {
          repositoryName,
          repositoryLink,
          description,
          stars
        } = item

        return (
          <Repository
            key={index}
            repositoryName={repositoryName}
            repositoryLink={repositoryLink}
            description={description}
            stars={stars}
          />
        )
      })}
    </>
  )
}

export default Repositories
