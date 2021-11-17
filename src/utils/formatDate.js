const formatDate = (date) => {
    const d = new Date(date);
    let month = `${d.getMonth() + 1}`;
    const day = `${d.getDate()}`;
    const year = d.getFullYear();

    if(month.length <0) {
        month = `0${month}`
    }
    if(day.length <0) {
        day = `0${day}`
    }

    return [year, month, day].join('-');
}

export default formatDate;