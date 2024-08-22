import { LocateFixed, LucideIcon, PhoneCall, ShieldCheck, Truck } from 'lucide-react'

interface IAvtoData {
	id: string
	IconComponent: LucideIcon
	text: string
}

export const avtoData: IAvtoData[] = [
	{
		id: '1',
		IconComponent: Truck,
		text: 'Новые автомобили, работающие на дизели и на СУГ',
	},
	{
		id: '2',
		IconComponent: ShieldCheck,
		text: 'Профессиональные водители',
	},
	{
		id: '3',
		IconComponent: LocateFixed,
		text: 'Современные системы навигации gps',
	},
	{
		id: '4',
		IconComponent: PhoneCall,
		text: 'Круглосуточный диспетчерский аппарат',
	},
]
