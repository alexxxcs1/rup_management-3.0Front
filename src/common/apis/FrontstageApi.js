//获取会议信息

import qs from 'qs';
const FrontstageApi = (ajaxinstance) => {
    const customer = {}
    //获取九宫格信息
    customer.getappinfo_client = (id) => {
        return ajaxinstance.post('jiugongge/info',qs.stringify({
            id:id,
        }));
    }
    //获取通知信息
    customer.getnoticeinfo_client = (id) => {
        return ajaxinstance.post('notices/info',qs.stringify({
            id:id,
        }));
    }
    //获取富文本内容
    customer.getrichtext_client = (id) => {
        return ajaxinstance.post('jiugongge/getTuwen',qs.stringify({
            id:id,
        }));
      }
    //获取会议日程内容 
    customer.getschedule_client= (id) => {
        return ajaxinstance.post('Meeting/getSchedule',qs.stringify({
            id:id,
        }));
      }
    //获取图片直播信息
    customer.getliveimginfo_client = (id) => {
        return ajaxinstance.post('livepicture/getMeeting',qs.stringify({
            id:id,
        }));
    }
    //获取图片直播图片
    customer.getliveimgdetial_client = (cate,page,lpid,strat_time) => {
        return ajaxinstance.post('livepicture/getPicture',qs.stringify({
            cate,page,lpid,strat_time:strat_time?strat_time:null,
        }));
    }
    //获取图片直播图片点赞
    customer.setliveimglike = (id) => {
        return ajaxinstance.post('livepicture/setLike',qs.stringify({
            id
        }));
    }
    //找自己
    customer.finduselfupload = (lpid,base_64) => {
        return ajaxinstance.post('livepicture/findYourself',qs.stringify({
            lpid,base_64
        }));
    }
    //拼图
    customer.getfacelist = (id) => {
        return ajaxinstance.post('livepicture/getOnePicture',qs.stringify({
            id
        }));
    }
    
    
    return customer
  }
  
  export default FrontstageApi