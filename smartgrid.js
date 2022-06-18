let smartgrid = require('smart-grid');

let settings = {
    outputStyle: 'scss',
    columns: 12,
    offset: '80px',
    mobileFirst: false,
    container: {
        maxWidth: '1140px',
        fields: '80px'
    },
    breakPoints: {
        lm: {
            width: '1280px',
            fields: '80px'
        },
        md: {
            width: '940px',
            fields: '25px'
        },
        sm: {
            width: '780px',
            fields: '15px'
        },
        xxs: {
            width: '440px',
            fields: '10px'
        }
    }
};

smartgrid('./src/styles', settings);


/*
 * mobileFirst
 *  false -> max-width
 *  true -> min-width
 */
