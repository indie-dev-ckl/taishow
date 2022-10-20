import React from 'react'
import moment from 'moment/moment'
import { getText } from 'domutils';

const PostDetail = ({post}) => {
    const getContentFragment2 = (index, obj, type) => {
      let modifiedText = obj.children.map((item)=>item.text);
      
      switch (type) {
        case 'heading-three':
          return <h3 key={index} className="text-xl font-semibold mb-4">{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</h3>;
        case 'paragraph':{
          var res=[];
          obj.children.map((child)=>{
            console.log("child: ",child,"\n");
              switch (child.type){
                case 'link':
                  const linktext=(child.children.map((ele)=>ele.text))[0]+"\n";
                  console.log(linktext)
                  res.push( <a href={child.href}><p>{linktext}</p></a>);
                  return;
                default:
                  let fragment=<>{child.text}</>
                  if(child.text==""){
                    //fragment = (<br/>);
                  }
                  if (child.bold) {
                    fragment = (<b>{fragment}</b>);
                  }
            
                  if (child.italic) {
                    fragment = (<em >{fragment}</em>);
                  }
            
                  if (child.underline) {
                    fragment = (<u>{fragment}</u>);
                  }
                  res.push(<p className='mb-8'>{fragment}</p>);
                  return;
              }
            }
          )
          return res;
        }
          
        case 'heading-four':{
          console.log("mt: ",modifiedText)
          return <h4 key={index} className="text-md font-semibold mb-4">{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</h4>;
        }
          
        case 'image':
          return (
            <img
              key={index}
              alt={obj.title}
              height={obj.height}
              width={obj.width}
              src={obj.src}
            />
          );
        default:
          return modifiedText;
      }
    };
    const getContentFragment = (index, text, obj, type) => {
        let modifiedText = text;
        //console.log("text:",modifiedText);
        //console.log("children: ",children,'\n');
        
        if (obj) {
          if (obj.bold) {
            modifiedText = (<b key={index}>{text}</b>);
          }
    
          if (obj.italic) {
            modifiedText = (<em key={index}>{text}</em>);
          }
    
          if (obj.underline) {
            modifiedText = (<u key={index}>{text}</u>);
          }
          
        }
    
        switch (type) {
          case 'heading-three':
            return <h3 key={index} className="text-xl font-semibold mb-4">{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</h3>;
          case 'paragraph':{
            return <p key={index} className="mb-8">{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</p>;
          }
            
          case 'heading-four':
            return <h4 key={index} className="text-md font-semibold mb-4">{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</h4>;
          case 'image':
            return (
              <img
                key={index}
                alt={obj.title}
                height={obj.height}
                width={obj.width}
                src={obj.src}
              />
            );
          default:
            return modifiedText;
        }
      };
  return (
    <>
    <div className="bg-white shadow-lg rounded-lg lg:p-8 pb-12 mb-8">
      <div className="relative overflow-hidden shadow-md mb-6">
        <img src={post.featuredImage.url} alt="" className="object-top h-full w-full object-cover  shadow-lg rounded-t-lg lg:rounded-lg" />
      </div>
      <div className="px-4 lg:px-0">
        <div className="flex items-center mb-8 w-full">
          <div className="flex md:flex items-center mb-4 lg:mb-0 lg:w-full w-full">
            <img
              alt={post.author.name}
              height="30px"
              width="30px"
              className="align-middle rounded-full"
              src={post.author.photo.url}
            />
            <p className="inline align-middle text-gray-700 ml-2 font-medium text-lg">{post.author.name}</p>
          </div>
          <div className="font-medium text-gray-700">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline mr-2 text-pink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <span className="align-middle">{moment(post.date).format('MMM DD, YYYY')}</span>
          </div>
        </div>
        <h1 className="mb-8 text-3xl font-semibold">{post.title}</h1>
        {post.content.raw.children.map((typeObj, index)=>{
            console.log("\ntype Object: ",typeObj);
            /*typeObj.children.map((child)=>{
              if(child.text==""){
              }
              else{
                console.log("child len: ",Object.keys(child).length);
                console.log("child:", child);
              }      
            })*/
            //if type=paragraph->if children length>1->check type->if type==link do action
            //else if type==code-block do action
            /*const children = typeObj.children.map((item, itemIndex)=>getContentFragment(itemIndex, item.text, item))
            return getContentFragment(index, children, typeObj,typeObj.type);*/
            return getContentFragment2(index,typeObj,typeObj.type);
        })}
      </div>
    </div>

  </>
  )
}

export default PostDetail