//获取会议信息

import qs from 'qs';
const CustomApi = (ajaxinstance) => {
    const customer = {}
    //获取分享信息
    customer.getWxShare = (url) => {
        return ajaxinstance.post('http://client.rup-china.com/weixinauth/index.php/index/weixin/getshare',qs.stringify({
            url
        }));
    }

    return customer
  }
  
  export default CustomApi