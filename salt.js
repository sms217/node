const crypto = require('crypto');
crypto.randomBytes(
    64, (err,buf)=>{//설정된 길이만큼 문자열이 생성되면 호출(콜백)
        // const salt = buf.toString('base64');
        const salt = '나의 소금'.toString('base64');
        console.log('salt : ', salt);
        crypto.pbkdf2(
            '암호화할 문자열',
            salt,
            100000,
            64,
            'sha512',
            (err,key) =>{
                console.log('password : ', key.toString('base64'));
            }
        );

    }
);