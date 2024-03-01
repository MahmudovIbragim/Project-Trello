import menu_left from '../../../assets/menu_home.svg';
import info_logo from '../../../assets/info_logo.svg';
import { useAppDispatch, useAppSelector } from '../../../redux/store';
import { useEffect, useState } from 'react';
import { getUsers } from '../../../redux/features/userSlice';
import delete_btn from '../../../assets/delete-button-svgrepo-com.svg';
import bell_icon from '../../../assets/211693_bell_icon.svg';
import pictures from '../../../assets/pictures.svg';
import members from '../../../assets/members.svg';
import setting from '../../../assets/settings.svg';
import desktop from '../../../assets/desktop.svg';
import calendar from '../../../assets/calendar.svg';
import arrow_bottom from '../../../assets/arrowBottom.svg';
import star from '../../../assets/star.svg';
import ramka from '../../../assets/ramka.svg';
import colektive from '../../../assets/coletive.svg';
import roket from '../../../assets/roket.svg';
import molnia from '../../../assets/molnia.svg';
import filter from '../../../assets/filter.svg';
import plusUser from '../../../assets/plusUser.svg';
import dop_menu from '../../../assets/dop_menu.svg';
import peaksoft from '../../../assets/peaksoft.svg';
import plus_btn from '../../../assets/add-plus-btn.svg';
import modal_title from '../../../assets/modal-title.svg';
import {
	AddCard,
	Advresting,
	ArrowButton,
	BurgerBar,
	BurgerMenu,
	ButtonSelect,
	ButtonTitles,
	Card,
	CardBoxy,
	CardContents,
	Content,
	Container,
	HeaderContent,
	HeaderSelects,
	ImgIconNav,
	InfoUser,
	LeftContent,
	LeftIcons,
	MenuTrello,
	Nav,
	NavLeft,
	NavRight,
	PageHome,
	ProfileImage,
	RightContent,
	SideBar,
	DeleteCardModal
} from './HomePageStyle';
import { useNavigate } from 'react-router-dom';
import {
	deleteItem,
	getTodo,
	patchTodo,
	postTodo,
	putTodoTitle
} from '../../../redux/features/todoSlice';
import { TodoItemType, TodoType } from '../../../types';
import Modal from '../modal/Modal';

const HomePage = () => {
	const dispatch = useAppDispatch();
	const userData = useAppSelector((state) => state.userDataReducer.data);
	const [profileImage, setProfileImage] = useState('');
	const [userName, setUserName] = useState('');
	const navigate = useNavigate();
	const [userPassword, setUserPassword] = useState<string | number>('');
	const [openBurger, setOpenBurger] = useState(false);
	const dataTodos = useAppSelector((state) => state.todoReducer.data);
	const [title, setTitle] = useState('');
	const [columnTitle, setColumnTitle] = useState('');
	const [isOpenForm, setIsOpenForm] = useState(false);
	const [cardId, setCardId] = useState<null | number>(null);
	const [isCompleted, setIsCompleted] = useState<null | number>(null);
	const [newInput, setNewInput] = useState('');
	// delete item modal
	// const [cardOpenModal, setCardOpenModal] = useState<number | null>(null);
	const [isModal, setIsModal] = useState<number | null>(null);
	const [openModal, setOpenModal] = useState(false);

	// 											Modals
	const modalOpen = (item) => {
		setIsModal(item);
		setOpenModal(true);
	};

	const onClose = () => {
		setOpenModal(false);
		setIsModal(null);
	};

	//												Modal

	const isUsers = +localStorage.getItem('isUser')!;

	const getUsersProfile = () => {
		const findUser = userData.find((item) => item._id === isUsers);

		if (findUser) {
			setProfileImage(findUser.image);
			setUserName(findUser.name);
			setUserPassword(findUser.password);
		} else {
			console.log('err');
		}
	};

	const removeUserIsLocal = () => {
		localStorage.removeItem('isUser');
		navigate('/');
	};

	const handleTodos = (event: React.KeyboardEvent) => {
		if (event.key === 'Enter') {
			const newData = {
				title: title,
				todos: []
			};
			dispatch(postTodo(newData));
			setIsOpenForm(false);
		}
	};

	const columnTodo = (
		e: React.KeyboardEvent,
		id: number,
		title: string,
		item: TodoType
	) => {
		if (e.key === 'Enter') {
			if (columnTitle === '') {
				alert('Нельзя путсую задачу создать');
			} else {
				const newTodoData = {
					title,
					todos: [
						...item.todos,
						{
							_id: Math.random(),
							todoTitle: columnTitle
						}
					]
				};
				dispatch(patchTodo({ id, newTodoData }));
				setCardId(null);
			}
		}
	};

	console.log(dataTodos);

	const upDataTodoTitle = (
		e: React.KeyboardEvent,
		id: number,
		todos: TodoItemType[],
		todoId: number
	) => {
		if (e.key === 'Enter') {
			const updatedTodos = todos.map((i) => {
				if (i._id !== todoId) {
					return i;
				}
				return {
					todoTitle: newInput,
					_id: i._id
				};
			});

			const newData = {
				todos: updatedTodos
			};

			dispatch(putTodoTitle({ id, newData }));
			setIsCompleted(null);
		}
	};
	// 														delete
	const deleteItemTodos = (_id: number) => {
		dispatch(deleteItem(_id));
	};

	// 											delete

	useEffect(() => {
		dispatch(getUsers());
		dispatch(getTodo());
	}, []);

	useEffect(() => {
		getUsersProfile();
	}, [userData]);

	return (
		<PageHome>
			<HeaderContent>
				<LeftContent>
					<LeftIcons>
						<div>
							<img src={menu_left} alt="" />
						</div>
						<MenuTrello></MenuTrello>
					</LeftIcons>
					<HeaderSelects>
						<ul>
							<li>Рабочие Прастранство</li>
							<li>Недавний</li>
							<li>Помечено</li>
							<li>Шаблоны</li>
							<button>Создавать</button>
						</ul>
					</HeaderSelects>
				</LeftContent>
				<RightContent>
					<input placeholder="Искать" type="text" />

					<ImgIconNav src={bell_icon} alt="" />
					<ImgIconNav src={info_logo} alt="" />

					{isUsers ? (
						<>
							<ProfileImage
								onClick={() => {
									setOpenBurger(!openBurger);
								}}
								src={profileImage}
								alt=""
							/>
						</>
					) : null}
				</RightContent>
			</HeaderContent>
			<Container>
				<SideBar>
					<Advresting>
						<img src={peaksoft} alt="" />
						<h3>
							PeakSoft <br />
							IBRA
						</h3>
					</Advresting>
					<ul>
						<li>
							<img src={pictures} alt="" />
							Картинки
						</li>
						<li>
							<img src={members} alt="" />
							Члены
						</li>
						<li>
							<img src={setting} alt="" />
							Настройки Рабочго Стола
						</li>

						<p>Виды рабочего стола</p>

						<li>
							<img src={desktop} alt="" />
							Стол
						</li>
						<li>
							<img src={calendar} alt="" />
							Календарь
						</li>
					</ul>
				</SideBar>
				<Content>
					{openBurger ? (
						<>
							<BurgerMenu>
								<BurgerBar>
									<p>Счет</p>
									<InfoUser>
										<img src={profileImage} alt="" />
										<ul>
											<li>{userName}</li>
											<li>{userPassword}</li>
										</ul>
									</InfoUser>
									<ul>
										<li onClick={() => navigate('/')}>Сменить аккаунт </li>
										<li>Упровлять счетом </li>
									</ul>
								</BurgerBar>
								<BurgerBar>
									<p>Trello</p>
									<ul>
										<li>Профиль и видимость</li>
										<li>Активность</li>
										<li>Карты</li>
										<li>настройки</li>
										<li>Тема</li>
									</ul>
								</BurgerBar>
								<BurgerBar>
									<ul>
										<li>Помощь</li>
										<li>Ярлыки</li>
										<li
											onClick={() => {
												removeUserIsLocal();
											}}
										>
											Выйти
										</li>
									</ul>
								</BurgerBar>
							</BurgerMenu>
						</>
					) : null}
					<Nav>
						<NavLeft>
							<p>Моя доска Trello</p>
							<img src={star} alt="" />
							<img src={colektive} alt="" />
							<ButtonSelect>
								<img src={ramka} alt="" />
								Рамка
							</ButtonSelect>
							<ArrowButton>
								<img src={arrow_bottom} alt="" />
							</ArrowButton>
						</NavLeft>
						<NavRight>
							<ul>
								<li>
									<img src={roket} alt="" />
									Бонусы
								</li>
								<li>
									<img src={molnia} alt="" />
									Автоматизация
								</li>
								<li>
									<img src={filter} alt="" />
									Фильтры
								</li>
								<li>
									<ProfileImage src={profileImage} alt="" />
								</li>
								<button>
									<img src={plusUser} alt="" />
									Делиться
								</button>
								<li>
									<img src={dop_menu} alt="" />
								</li>
							</ul>
						</NavRight>
					</Nav>
					<CardContents>
						{dataTodos.map((item) => (
							<Card key={item._id}>
								<textarea defaultValue={item.title}></textarea>
								{item.todos.map((todo) => (
									<CardBoxy key={todo._id}>
										{isCompleted === todo._id ? (
											<>
												<input
													type="text"
													value={newInput}
													onChange={(e) => setNewInput(e.target.value)}
													onKeyDown={(e) =>
														upDataTodoTitle(e, item._id!, item.todos, todo._id!)
													}
												/>
											</>
										) : (
											<>
												<p
													onClick={() => {
														setIsCompleted(todo._id!);
														setNewInput(todo.todoTitle);
													}}
												>
													{todo.todoTitle}
												</p>
											</>
										)}
										<img
											src={delete_btn}
											alt=""
											onClick={() => {
												alert('sss');
											}}
										/>
									</CardBoxy>
								))}
								{item._id === cardId ? (
									<>
										<input
											type="text"
											placeholder="Задача"
											value={columnTitle}
											onChange={(e) => setColumnTitle(e.target.value)}
											onKeyDown={(e) =>
												columnTodo(e, item._id!, item.title, item)
											}
										/>
									</>
								) : null}
								<ButtonTitles>
									<button onClick={() => setCardId(item._id!)}>
										<img src={plus_btn} alt="" />
										Добавить Задачу
									</button>
									<img
										onClick={() => {
											modalOpen(item);
										}}
										src={modal_title}
										alt=""
									/>
								</ButtonTitles>
								{/* {cardOpenModal === item._id ? (
									<>
										<DeleteCardModal></DeleteCardModal>
									</>
								) : null} */}
								<Modal isOpen={openModal} onClose={onClose}>
									{isModal && (
										<>
											<div>sadas</div>
										</>
									)}
								</Modal>
							</Card>
						))}
						{isOpenForm ? (
							<>
								<input
									type="text"
									value={title}
									onChange={(e) => setTitle(e.target.value)}
									onKeyDown={(event) => handleTodos(event)}
								/>
							</>
						) : null}
						<AddCard>
							<button onClick={() => setIsOpenForm(!isOpenForm)}>
								<img src={plus_btn} alt="" />
								Добавить Карточку
							</button>
						</AddCard>
					</CardContents>
				</Content>
			</Container>
		</PageHome>
	);
};

export default HomePage;
