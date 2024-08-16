'use client'

import React, { useState } from 'react';
import SideMenu from './side-menu/SideMenu'
import ContentArea from './content-area/ContentArea'


const ContactsMain: React.FC = () => {
    const menuItems = [
        'Промывка цистерн на ППС',
        'Ремонт вагонов',
        'Партнерам',
        'Пресс-центр',
        'По вопросам закупок',
        'По антикоррупционной политике'
    ];

    const [selectedItem, setSelectedItem] = useState(menuItems[0]);

    const getContent = (item: string) => {
        switch (item) {
            case 'Промывка цистерн на ППС':
                return 'Контент для промывки цистерн на ППС';
            case 'Ремонт вагонов':
                return 'Контент для ремонта вагонов';
            // Добавьте остальные случаи
            default:
                return 'Выберите пункт меню';
        }
    };

    return (
        <div className='relative flex items-center justify-center w-full mb-24 md:mb-36 bg-white rounded-lg'>
            <SideMenu
                items={menuItems}
                selectedItem={selectedItem}
                onItemSelect={setSelectedItem}
            />
            <ContentArea content={getContent(selectedItem)} />
        </div>
    );
};

export default ContactsMain
