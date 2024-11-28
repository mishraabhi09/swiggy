export function filterdata(searchInput, newRestraunt) {
    const filterdata = newRestraunt.filter((restraunt) => restraunt?.info?.name?.toLowerCase()?.includes(searchInput?.toLowerCase()));

    return filterdata;
}



 