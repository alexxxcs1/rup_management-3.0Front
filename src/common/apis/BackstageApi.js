import qs from 'qs';
const BackstageApi = (ajaxinstance) => {
    const customer = {}
    //添加分组
    customer.addassestgroup = (type,name) => {
        return ajaxinstance.post('material/addMaterialGroup',qs.stringify({
            type:type,
            name:name
        }));
      }
    //获取会议信息
    customer.getactinfo = (id) => {
        return ajaxinstance.post('meeting/getMeeting',qs.stringify({
            id:id,
        }));
      }
    //获取会议列表
    customer.getactlist = (page) => {
        return ajaxinstance.post('meeting/index',qs.stringify({
            page
        }));
    }
    //获取九宫格信息
    customer.getappinfo = (mid,id) => {
        return ajaxinstance.post('jiugongge/edit',qs.stringify({
            mid:mid,
            id:id,
        }));
    }
    //获取图片直播信息
    customer.liveimginfo = (mid,id) => {
        return ajaxinstance.post('livePicture/getInfo',qs.stringify({
            mid:mid,
            id:id,
        }));
    }
    //获取素材分组列表
    customer.assestgroup = (type) => {
        return ajaxinstance.post('material/getMaterialGroup',qs.stringify({
            type:type
        }));
    }
    //获取素材列表
    customer.assestliblist = (type,mgid,page) => {
        return ajaxinstance.post('material/index',qs.stringify({
            type:type,
            mgid:mgid,
            page:page,
        }));
      }
    //删除素材
    customer.deleteassest = (id) => {
        return ajaxinstance.post('material/delMaterial',qs.stringify({
            id
        }));
      }
    //更新图片和文件素材信息  
    customer.updateassestimgfile = (id,mgid,name) => {
        return ajaxinstance.post('material/updateMaterialImgFile',qs.stringify({
            id,mgid,name
        }));
      }
    //复制一份富文本素材 
    customer.copyassestrichtext = (id) => {
        return ajaxinstance.post('material/copyMaterial',qs.stringify({
            id
        }));
      }
    //更新富文本素材 
    customer.updateassestrich = (id,name,content) => {
        return ajaxinstance.post('material/updateMaterial',qs.stringify({
            id,name,content
        }));
      }
      
      
    //获取通知信息
    customer.getnoticeinfo = (mid,id) => {
        return ajaxinstance.post('notices/info',qs.stringify({
            mid:mid,
            id:id,
        }));
      }
    //登录验证
    customer.login = (uname,upw) => {
        return ajaxinstance.post('login/login',qs.stringify({
            account:uname,
            password:upw
        }));
      }
    //设置九宫格
    customer.setappoption = (mid,id,top_banner,top_banner_url,bottom_banner,bottom_banner_url,item,title,desc,imgurl) => {
        return ajaxinstance.post('jiugongge/update',qs.stringify({
            mid,id,top_banner,top_banner_url,bottom_banner,bottom_banner_url,item,title,desc,imgurl
        }));
      }
    //设置会议信息
    customer.updateactinfoa= (id,title,city,body_color,auxiliary_color,content,start_time,end_time) => {
        return ajaxinstance.post('meeting/updateMeeting',qs.stringify({
            id:id,
            title:title,
            city:city,
            body_color:body_color,
            auxiliary_color:auxiliary_color,
            content:content,
            start_time:start_time,
            end_time:end_time
        }));
    }
    //设置通知信息
    customer.updatenoticedetial = (mid,id,content,item,title,desc,imgurl) => {
        return ajaxinstance.post('notices/update',qs.stringify({
            mid,id,content,item,title,desc,imgurl
        }));
    }
    //设置图片直播信息
    customer.updateimglivedetial = (mid,id,top_banner,top_banner_url) => {
        return ajaxinstance.post('livePicture/setInfo',qs.stringify({
            mid:mid,
            id:id,
            top_banner:top_banner,
            top_banner_url:top_banner_url,
        }));
    }
    //设置会议日程
    customer.setActschedule = (mid,id,content) => {
        return ajaxinstance.post('meeting/addSchedule',qs.stringify({
            mid,id,content
        }));
    }
    //获取会议日程
    customer.getActschedule = (id) => {
        return ajaxinstance.post('meeting/getSchedule',qs.stringify({
            id
        }));
    }
    
    //获取直播图片
    customer.getimglivedetial = (lpid,start_time,end_time,status,is_top,page,num) => {
        return ajaxinstance.post('livePicture/getPicture',qs.stringify({
            lpid,start_time,end_time,status,is_top,page,num
        }));
    }
    //设置排序直播图片
    customer.setimglivelibsort = (ids) => {
        return ajaxinstance.post('livePicture/setSort',qs.stringify({
            ids
        }));
    }
    //上传新图片直播图片
    customer.setnewliveimg = (lpid,imgurl,create_time) => {
        return ajaxinstance.post('livePicture/addPicture',qs.stringify({
            lpid,imgurl,create_time
        }));
    }

    //设置直播图片置顶/不置顶||审核/取消审核
    customer.setliveimgtop = (id,value,type) => {
        return ajaxinstance.post('livePicture/setTop',qs.stringify({
            id,value,type
        }));
    }
    //删除图片直播图片
    customer.liveimgdelete = (id) => {
        return ajaxinstance.post('livePicture/delPicture',qs.stringify({
            id
        }));
    }

    //上传素材
    customer.assestlibupload = (type,name,mgid,content) => {
        return ajaxinstance.post('material/addMaterial',qs.stringify({
            type:type,
            name:name,
            url:type==3?null:content,
            mgid:mgid,
            content:type==3?content:null,
        }));
    }
    //上传文件
    customer.uploadfile = (file) => {
        return ajaxinstance.post('material/imgUpload',file);
    }

    return customer
    }

  export default BackstageApi