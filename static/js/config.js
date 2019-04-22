let bookContent={};
const baseData=function(data){
    document.title=data[0].title
    bookContent=data[0]
    return  data[0].title
 }