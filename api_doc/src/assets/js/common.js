const COL_WIDTH = {
    left: 14,
    right: 10
}

const validateNull = (rule, value, callback) => {
    if (value === '') {
        callback(new Error('Please input '+ rule.label));
    } else if(rule.label=='Email' && /^([A-Za-z0-9_\-.])+@([A-Za-z0-9_\-.])+\.([A-Za-z]{2,10})$/.test(value)==false){
        callback(new Error('Please check email format'));
    } else {
        callback();
    }
};

export {validateNull, COL_WIDTH}