import styled from 'styled-components';

export const PageHome = styled.div``;
export const HeaderContent = styled.header`
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 10px 0px;
	background-color: #1d2125;
	border-bottom: 1px solid #dfdcffff;
`;

export const LeftIcons = styled.div`
	display: flex;
	align-items: center;
	margin-left: 20px;
	gap: 20px;
	cursor: pointer;
`;

export const HeaderSelects = styled.div`
	display: flex;
	align-items: center;
	ul {
		display: flex;
		align-items: center;
		gap: 30px;
		color: #9fadbc;
		list-style: none;
		margin: 0;
		li {
			font-family: sans-serif;
			font-weight: 600;
			cursor: pointer;
		}
		button {
			font-size: 14px;
			font-weight: 500;
			cursor: pointer;
			font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI',
				Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue',
				sans-serif;
			color: #172b4d;
			background-color: #026afc;
			border: none;
			border-radius: 4px;
			padding: 7px 15px;
			outline: none;
			&:hover {
				background-color: #0c66e4;
			}
		}
	}
`;

export const MenuTrello = styled.div`
	padding: 0px 50px;
	height: 20px;
	background: url('https://trello.com/assets/87e1af770a49ce8e84e3.gif');
	background-repeat: no-repeat;
	background-size: 90px 20px;
	background-position: center top;
	display: block;
`;

export const LeftContent = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

export const RightContent = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	gap: 20px;
	margin-right: 30px;
	input {
		padding: 5px 10px;
		font-size: 14px;
		outline: none;
		color: #9fadbc;
		border: 0.3px solid #9fadbc;
		border-radius: 4px;
		font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI',
			Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue',
			sans-serif;
		background-color: transparent;
		&:hover {
			background-color: #282e33;
		}
	}
`;
export const ImgIconNav = styled.img`
	width: 30px;
	cursor: pointer;
`;

export const ProfileImage = styled.img`
	width: 30px;
	height: 30px;
	border-radius: 50%;
	cursor: pointer;
`;

export const BurgerMenu = styled.div`
	display: flex;
	flex-direction: column;
	max-width: 232px;
	width: 100%;
	box-sizing: border-box;
	position: absolute;
	left: 87.5%;
	border-radius: 10px;
	z-index: 1;
	background-color: #282e33;
	color: white;
`;
export const BurgerBar = styled.div`
	margin: 5px 0;
	p {
		margin-left: 40px;
		font-size: 18px;
		font-weight: 600;
		font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI',
			Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue',
			sans-serif;
	}
	ul {
		display: flex;
		flex-direction: column;
		gap: 10px;
		padding-left: 25px;
		li {
			font-size: 16px;
			font-weight: 600;
			font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI',
				Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue',
				sans-serif;
			cursor: pointer;
			max-width: 180px;
			width: 100%;
			border-radius: 5px;
			padding: 5px 0px 5px 10px;
			background-color: #484e53;
			&:hover {
				color: #dadce3;
				background-color: #40464d;
			}
		}
	}
`;

export const InfoUser = styled.div`
	display: flex;
	align-items: center;
	margin-left: 35px;
	ul {
		padding: 0px;
		li {
			margin-left: 15px;
			font-size: 16px;
			font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI',
				Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue',
				sans-serif;
			font-weight: 600;
		}
	}
	img {
		border: 2px solid transparent;
		width: 60px;
		height: 60px;
		border-radius: 50%;
		&:hover {
			border: 2px solid white;
		}
	}
`;

export const Container = styled.div`
	display: flex;
	position: relative;
`;

export const SideBar = styled.div`
	background-color: #221d24;
	color: #9fadbc;
	max-width: 260px;
	width: 100%;
	height: 100vh;
	ul {
		display: flex;
		flex-direction: column;
		margin-top: 20px;
		padding-top: 20px;
		border-top: 0.1px solid rgba(129, 126, 126, 0.733);
		gap: 20px;
		li {
			list-style: none;
			display: flex;
			align-items: center;
			font-size: 14px;
			font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI',
				Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue',
				sans-serif;
			font-weight: 600;
			cursor: pointer;
		}
	}
`;

export const Advresting = styled.div`
	display: flex;
	justify-content: center;
	gap: 30px;
	margin-top: 10px;
	h3 {
		font-size: 18px;
		font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI',
			Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue',
			sans-serif;
		font-weight: 600;
	}
	img {
		width: 60px;
	}
`;
export const Content = styled.div`
	height: 100vh;
	width: 100%;
	background: linear-gradient(
		45deg,
		rgba(163, 0, 122, 1) 0%,
		rgba(12, 49, 111, 1) 100%
	);
`;

export const Nav = styled.nav`
	display: flex;
	justify-content: space-between;
	width: 100%;
	padding: 12px 12px;
	box-sizing: border-box;
	backdrop-filter: brightness(0.5);
`;
export const NavLeft = styled.div`
	display: flex;
	align-items: center;
	gap: 20px;
	margin-left: 20px;
	p {
		color: #dfdfdf;
		font-size: 16px;
		font-weight: 600;
		font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI',
			Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue',
			sans-serif;
		cursor: pointer;
	}
`;

export const ButtonSelect = styled.button`
	display: flex;
	align-items: center;
	padding: 4px 10px;
	border-radius: 4px;
	font-size: 14px;
	font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
		Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
	font-weight: 600;
	background-color: #ebebeb;
	border: none;
	outline: none;
	cursor: pointer;
	&:hover {
		background-color: #fff;
	}
	img {
		margin-right: 10px;
	}
`;

export const ArrowButton = styled.button`
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 4px 8px;
	border: none;
	outline: none;
	cursor: pointer;
	border-radius: 4px;
	background-color: #ebebeb;
	&:hover {
		background-color: #fff;
	}
`;

export const NavRight = styled.div`
	display: flex;
	ul {
		display: flex;
		align-items: center;
		list-style: none;
		gap: 20px;
		li {
			display: flex;
			align-items: center;
			color: #dfdfdf;
			cursor: pointer;
			img {
				margin-right: 10px;
			}
		}
		button {
			display: flex;
			align-items: center;
			border: none;
			outline: none;
			padding: 5px 10px;
			border-radius: 4px;
			background-color: #ebebeb;
			cursor: pointer;
			&:hover {
				background-color: #fff;
			}
		}
	}
`;

export const CardContents = styled.div`
	display: flex;
	flex-wrap: wrap;
	align-items: start;
	gap: 30px;
	padding: 30px 0px 0px 30px;
`;

export const AddCard = styled.div`
	display: flex;
	align-items: center;
	button {
		display: flex;
		align-items: center;
		justify-content: start;
		text-align: start;
		background-color: #f010101f;
		border-radius: 8px;
		font-size: 18px;
		font-weight: 600;
		font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI',
			Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue',
			sans-serif;
		padding: 10px 30px 10px 10px;
		border: none;
		color: white;
		img {
			margin-right: 10px;
		}
	}
`;

export const Card = styled.div`
	display: flex;
	flex-direction: column;
	gap: 10px;
	max-width: 280px;
	width: 100%;
	box-sizing: border-box;
	padding: 10px;
	border-radius: 8px;
	background-color: #101204;
	textarea {
		max-width: 260px;
		max-height: 20px;
		min-width: 260px;
		min-height: 20px;
		width: 260px;
		height: 20px;
		color: white;
		outline: none;
		border: none;
		background-color: transparent;
	}
	input {
		font-size: 14px;
		font-weight: 600;
		font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI',
			Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue',
			sans-serif;
		border-radius: 8px;
		padding-left: 15px;
		color: white;
		padding-block: 5px;
		background-color: transparent;
	}
`;

export const CardBoxy = styled.div`
	display: flex;
	justify-content: space-between;
	width: 100%;
	padding: 3px 0px;
	border-radius: 5px;
	background-color: #22272b;
	color: white;
	p {
		margin: 0px;
		padding: 5px 50px 5px 15px;
	}

	img {
		width: 18px;
		margin-right: 8px;
		cursor: pointer;
	}
`;

export const ButtonTitles = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	button {
		display: flex;
		align-items: center;
		font-size: 14px;
		font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI',
			Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue',
			sans-serif;
		font-weight: 600;
		padding: 5px 10px;
		border: 1px solid white;
		border-radius: 4px;
		outline: none;
		color: white;
		background-color: transparent;
		cursor: pointer;
		img {
			cursor: pointer;
			margin-right: 10px;
		}
	}
	img {
		width: 20px;
		margin-right: 6px;
		cursor: pointer;
	}
`;
export const DeleteCardModal = styled.div``;


export const ContentModalBox = styled.div`
	display: flex;
	justify-content: space-between;
	max-width: 768px;
	width: 100%;
	padding: 12px 0px;
	background-color: #323940;
	border-radius: 7px;
`;

export const LeftModal = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	margin-left: 30px;
	h3 {
		font-size: 20px;
		font-weight: 600;
		color: white;
		margin-top: 0px;
		font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI',
			Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue',
			sans-serif;
	}
	h4 {
		font-size: 16px;
		font-weight: 600;
		color: white;
		margin-top: 0px;
		font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI',
			Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue',
			sans-serif;
	}
	input {
		font-size: 18px;
		font-weight: 600;
		color: white;
		font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI',
			Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue',
			sans-serif;
		border: 2px solid #2552f5;
		border-radius: 10px;
		padding: 10px 0px 10px 20px;
		background-color: transparent;
		outline: none;
		width: 95%;
		&:hover {
			background-color: #3f454b;
		}
	}
	button {
		font-size: 16px;
		font-weight: 600;
		font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI',
			Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue',
			sans-serif;
		width: fit-content;
		border-radius: 5px;
		margin-top: 20px;
		padding: 10px 15px;
		border: none;
		outline: none;
		color: white;
		background-color: #2552f5;
		&:hover {
			background-color: #0037ff;
		}
	}
`;

export const ComentContainer = styled.div`
	padding-left: 20px;
	width: 100%;
	height: 100%;
	border-radius: 5px;
	color: white;
	margin-top: 20px;
`;

export const CommetnsBox = styled.div`
	display: flex;
	align-items: center;
	width: 100%;
	img {
		width: 50px;
		border-radius: 50%;
	}
	ul {
		width: 85%;
		padding-left: 20px;
		h5 {
			font-size: 16px;
			font-weight: 600;
			margin: 0px;
			margin-bottom: 10px;
			font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI',
				Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue',
				sans-serif;
		}
		li {
			display: flex;
			justify-content: space-between;
			padding: 10px 0px 10px 15px;
			border-radius: 8px;
			width: 90%;
			background-color: #22272b;
			img {
				width: 25px;
				text-align: end;
			}
		}
	}
`;

export const RightModal = styled.div`
	ul {
		display: flex;
		flex-direction: column;
		gap: 10px;
		margin-right: 20px;
		margin-top: 60px;
		padding-top: 20px;
		li {
			display: flex;
			padding: 10px;
			background-color: #3b444c;
			border-radius: 5px;
			color: white;
			cursor: pointer;
			&:hover {
				background-color: #484e53;
			}
			img {
				width: 20px;
				margin-right: 10px;
			}
		}
	}
`;

export const InputAddCard = styled.div`
	input {
		font-size: 18px;
		font-weight: 600;
		color: white;
		font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI',
			Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue',
			sans-serif;
		border-radius: 10px;
		padding: 5px 0px 5px 20px;
		background-color: #22272b;
		outline: none;
		width: 95%;
	}
`;

