var json={
    class_items:'x',
    item:[
        {tag:'input',type:'text',value:'100'},
        {tag:'select',value:'2',option:{2:'col',6:'mex'}}
        ]
};
function Html(data){
    this.data=data||{};
    this.render=function(){
        for(var k in this.data.item){
           var item=this.data.item[k];
            if(item.tag==='input'){
                var html="<input type='"+item.type+"'value='"+ (item.value?item.value:'')+"' />";
               // alert(html);
                document.write(html)
            }
             if(item.tag==='select'){
               var html1="<select>"
                        +"<option value='"+item.value+"' >"+item.option[2]+"</option>"
                        +"<option value='"+item.value+"' >"+item.option[6]+"</option>"
                        + "</select>";
               document.write(html1)
            }
        }
    }
    
}; 

var html=new Html(json);
html.render();






