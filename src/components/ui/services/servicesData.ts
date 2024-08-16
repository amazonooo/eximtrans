export interface IServicesData {
  id: string
  title: string
  image: string
  href: string
	anim: string
}

export const servicesData = [
	{
		id: '1',
		title: 'Грузовые перевозки',
		image: '/gruz-per.png',
		href: '/',
		anim: '1',
	},
	{
		id: '2',
		title: 'Железнодорожные перевозки',
		image: '/zhel-per.png',
		href: '/',
		anim: '2',
	},
	{
		id: '3',
		title: 'Продажа запчастей и металлолома',
		image: '/shesterenki.jpg',
		href: '/',
		anim: '3',
	},
	{
		id: '4',
		title: 'Ремонт вагонов',
		image: '/chuvak.png',
		href: '/',
		anim: '4',
	},

	{
		id: '5',
		title: 'Аренда вагонов',
		image: '/obmen.jpg',
		href: '/',
		anim: '5',
	},
]