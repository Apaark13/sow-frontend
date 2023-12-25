import React from 'react';
type MenuItemProps = {
    src: string;
    text: string;
    active: boolean;
  };
  
  const MenuItem: React.FC<MenuItemProps> = ({ src, text, active }) => {
    return (
      <div className={`menuitem`}>
        {<div className={`dot ${active ? 'active' : ''}`} />}
        <img src={src} alt="" />
        <p>{text}</p>
      </div>
    );
  };

const menu = () => {
    const menuItemsData: MenuItemProps[] = [
        { src: '/assets/invoice.png', text: 'Invoices', active: false },
        { src: '/assets/customers-icon.png', text: 'Customers', active: false },
        { src: '/assets/business-icon.png', text: 'My Business', active: false },
        { src: '/assets/journal.png', text: 'Invoice Journal', active: false },
        { src: '/assets/pricetag.png', text: 'Price List', active: true },
        { src: '/assets/invoices-icon.png', text: 'Multiple Invoicing', active: false },
        { src: '/assets/discount.png', text: 'Offer', active: false },
        { src: '/assets/inventory.png', text: 'Inventory Control', active: false },
        { src: '/assets/member-card.png', text: 'Member Invoicing', active: false },
        { src: '/assets/cloud-storage.png', text: 'Import/Export', active: false },
        { src: '/assets/arrow.png', text: 'Logout', active: false },
      ];
    

  return (
    <div className='menu'>
    <h3>Menu</h3>
    <hr />
    {menuItemsData.map((item, index) => (
        <MenuItem key={index} active={item.active} src={item.src} text={item.text}  />
      ))}
    </div>
  )
}

export default menu 