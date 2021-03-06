import React, { forwardRef } from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { compose } from 'redux'

import HeaderShadow from '../../shared/low/HeaderShadow'
import ImgAndContent from '../../shared/low/ImgAndContent'

import withApiCache, { CACHE_MODULE } from '../../HOC/WithApiCache'

const Container = styled.div`
	position: fixed;
	top: 0;
	width: 75%;
	z-index: 99;
	opacity: 0;
`

const Header = styled(ImgAndContent)`
	margin: 0;
	padding: 2em 1em 1.5em;
	padding-left: 5em;
	cursor: auto;
	background-color: #fff;

	transition: 0.2s ease padding;

	&.content-minimized {
		padding-top: 1em;
		padding-bottom: 1em;
  }
  
	@media only screen and (orientation: vertical) {
		padding-left: 2.5em;
	}
`

const mapStateToProps = state => ({
	id: state.learnData.selectedActivity.moduleId
})
const enhancer = compose(connect(mapStateToProps), withApiCache([CACHE_MODULE]))

const ModuleName = enhancer(({ wac_data: [modu1e] }) => (
	<code style={{ fontSize: '50%', backgroundColor: 'transparent' }}>
		{modu1e?.name?.toUpperCase()}
	</code>
))

const ContentHeader = forwardRef(({ containerRef, name }, ref) => {
	return (
		<Container id="learn-content-header" className="learn-i-contentheader">
			<Header
				ref={ref}
				imgURL={require('../../../assets/icons/document.svg')}
				imgWidthEms="4"
				gap="1.5em"
				reverse
				contentSize={'150%'}
				title={name}
			>
				<ModuleName />
			</Header>
			<HeaderShadow containerRef={containerRef} />
		</Container>
	)
})

export default ContentHeader
