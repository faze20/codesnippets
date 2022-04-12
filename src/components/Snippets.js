import React  from 'react'
import '../Snippets.css'

const Snippets = () => {
    const [number , setNumber ] = React.useState()
    const [colours , setColours ] = React.useState("")
    const [fibValue , setFibValue] = React.useState("")


    const numberWithCommas = (number) =>{
        return number.toString().replace(/\B(?=(\D{3})+(?!\D))/g, ",");
    }
    const handleChange = (e)=>{
        const outputvalue = numberWithCommas(e.target.value)
        setNumber(outputvalue)

    }
    const generateColor = ()=>{
        const symbols = "0123456789ABCDEF";
        var newColor = ""
        for(let i=0 ; i<6 ; i++){
            newColor +=symbols[Math.floor(Math.random()*16)]
        }
        setColours("#" +newColor)
    }
    const fibonacchiHandle = (n) =>{
        const result =[0,1];
        for(let i = 2 ; i<=n; i++){
            let a = result[i-1]
            let b = result[i-2]
            result.push (a + b)
        }
        
        return result[n]
    }

  return (
    <div className='snippet_container'>
       <div className="snippet_contents">
            <div className="snippet_items">
               <h1>Gradient with two colors </h1>
               <h2 className='snippet_display' > 2 colors : </h2>
               <div className="gradient">
                   Gradients
               </div>
             

           </div>
           <div className="snippet_items">
               <h1>reformat long numbers with &#44; </h1>
               <h2 className='snippet_display'>Display : {number}</h2>
               <input 
               onChange={handleChange}
               type="number" name="milions" id="" placeholder='try numbers above millions'/>

           </div>
           <div className="snippet_items">
               <h1>Generate random colors </h1>
               <h2 className='snippet_display' style= {{ background : `${colours}` }}> Display : {colours}</h2>
              <button onClick={generateColor}>Click to generate Random color</button>

           </div>

           <div className="snippet_items">
               <h1>Gradient with two colors </h1>
               <h2 className='snippet_display' > Label in checkbox</h2>
               <div className="label">
                    <label htmlFor="terms">
                        <input type="checkbox" name="terms" id="" value='value' />
                        I Agree
                    </label>
                    <p>click on label and checkbox is ticked</p>
                    
                </div>
            </div>
            <div className="snippet_items">
               <h1>More Gradients </h1>
               
               <div className="contain">
                   
                    <div className='hero'>
                       <h3>Blog Article</h3>
                       <h5>{`${new Date().getFullYear()}`}  | By Afeez Badmos</h5>
                    </div>
                    <div className="example_contain">
                    <div className='aside'>
                            <h3>Welcome User</h3>
                           <ul>
                               <li>Dashboard</li>
                               <li>Analysis</li>
                               <li>Slides</li>
                           </ul>
                        </div>
                        <div className='metal'>
                            &#128269;
                            <p>Find Artistic Metals : more gradients</p>
                            <div className='checkInput'>
                        &#10003;
                    </div>
                        </div>
                       
                    </div>
                        
               </div>

              

           </div>
           <div className="snippet_items">
               <h1>Fibonaci Sequence </h1>
               <h2 className='snippet_display' >fibinachi :{fibValue}</h2>
               <div className="label">
                   <input 
                   
                   onChange={e =>setFibValue(fibonacchiHandle(e.target.value))}
                    type="text" />
                    
                </div>
            </div>
       </div>
    </div>
  )
}

export default Snippets