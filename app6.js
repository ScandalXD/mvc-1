const getStudentFullName = (id) => {
    if (id === 0) {
        return "Artur Pylypenko";
    } else if (id === 1) {
        return "Kacper Nowak 111222";
    } else if (id === 2) {
        return "Maja Kowalska 222333";
    } else {
        return "Michał Wiśniewski";
    }
};

const getStudentId = (id) => {
    if (id === 0) {
        return "44074";
    } else if (id === 1) {
        return "111222";
    } else if (id === 2) {
        return "222333";
    } else {
        return "333444";
    }
};

module.exports = {
    getStudentFullName,
    getStudentId
};
