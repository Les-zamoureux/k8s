const emailCheck = (email) => {
    if(email.includes('@') && email.includes('.')) return true
    else return false
}

const timeElapsed = (inputDate) => {
    const today = new Date();
    const date = new Date(inputDate);
    const diffInMilliseconds = today - date;

    console.log(diffInMilliseconds)

    const diffInSeconds = Math.floor(diffInMilliseconds / 1000);

    if (diffInSeconds < 60) {
        return {time:diffInSeconds, type:"s"};
    }

    const diffInMinutes = Math.floor(diffInSeconds / 60);

    if (diffInMinutes < 60) {
        return {time:diffInMinutes, type:"min"};
    }

    const diffInHours = Math.floor(diffInMinutes / 60);

    if (diffInHours < 60) {
        return {time:diffInHours, type:"h"};
    }

    const diffInDays = Math.floor(diffInHours / 24);

    if (diffInDays < 30) {
        return {time:diffInDays, type:"d"};
    }

    // Convert days to months (approximation)
    const diffInMonths = today.getMonth() - date.getMonth() + (12 * (today.getFullYear() - date.getFullYear()));

    if (diffInMonths < 12) {
        return {time:diffInMonths, type:"m"};
    }

    // Convert to years
    const diffInYears = today.getFullYear() - date.getFullYear();

    return {time:diffInYears, type:"y"};
}

export {emailCheck, timeElapsed}