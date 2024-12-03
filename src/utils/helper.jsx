export function filterdata(searchInput, newRestraunt) {

    const filterdata = newRestraunt.filter((restraunt) => restraunt?.info?.name?.toLowerCase()?.includes(searchInput?.toLowerCase()));

    return filterdata;
}

export function filterMartData(searchInput, newMart) {

    const filterMartData = newMart.filter((Mart) => Mart?.nodeId?.displayName?.toLowerCase()?.includes(searchInput?.toLowerCase()));

    return filterMartData;
}



