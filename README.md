# log-colorify [![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)
> step to install package
```
npm i @sallbro/log-colorify
```
-----
> how to use 
```
import {Log} from "@sallbro/log-colorify"
const log=Log();
log.success("pass string");
log.info("pass string");
log.danger("pass string");
log.custom("you can add custom style",
  {
  color:"red",
  bgcolor:"yellow",
  font:"",
  weight:"bold",
  size:"20px",
  shadow:"3px 3px rbg(1,1,1,0.7)"
  }
);
```

