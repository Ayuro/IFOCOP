export const getMenuItems = (req) => {
  const menuItems = [];
  console.log('req.session: ', req.session);
    if (req?.session?.user) {
      menuItems.push(...CONSTANTS.connectedMenuItems)
    } else {
      menuItems.push(...CONSTANTS.disconnectedMenuItems)
  }

  return menuItems;
};
