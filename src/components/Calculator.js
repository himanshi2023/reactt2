import React,{useState} from 'react';
function Calculator()
{
	const[result,setResult]=useState("");
	const clickHandle=(e)=>{setResult(result.concat(e.target.value));}
	const clearScreen=()=>{setResult("");}
	const calculate=()=>{setResult(eval(result).toString());}
	return(
	<div>
	<center>
	<div style={{width:"205px",borderRadius:"2px"}}>
	<div class="screen">
	<input className="Display" type="text" value={result} style={{marginTop:"220px",backgroundColor:"#1e2896",borderStyle:"hidden",borderRadius:"10px 10px 0px 0px",fontSize:"30px"}}/>
	</div>
	<div className="keypad" style={{backgroundColor:"#08193c",borderRadius:"0px 0px 10px 10px"}}>
	<div>
		<input className="Button1" onClick={clickHandle} type="button" value="7"/>
		<input className="Button1" onClick={clickHandle} type="button" value="8"/>
		<input className="Button1" onClick={clickHandle} type="button" value="9"/>
		<input className="Button1"  onClick={clearScreen}type="button" value="C"/>
		<input className="Button1" onClick={clickHandle} type="button" value="/"/>
	</div>
	<div>
		<input className="Button1" onClick={clickHandle} type="button" value="4"/>
		<input className="Button1" onClick={clickHandle} type="button" value="5"/>
		<input className="Button1" onClick={clickHandle} type="button" value="6"/>
		<input className="Button1" onClick={clickHandle} type="button" value="*"/>
	</div>	
	<div>
		<input className="Button1" onClick={clickHandle} type="button" value="1"/>
		<input className="Button1" onClick={clickHandle} type="button" value="2"/>
		<input className="Button1" onClick={clickHandle} type="button" value="3"/>
		<input className="Button1" onClick={clickHandle} type="button" value="-"/>
	</div>
	<div>
		<input className="Button1" onClick={clickHandle} type="button" value="0"/>
		<input className="Button1" onClick={clickHandle} type="button" value="."/>
		<input onClick={calculate}  className="Button1" type="button" value="="/>
		<input className="Button1" onClick={clickHandle} type="button" value="+"/>

	</div>		
	</div>
	</div>
	</center>
	</div>
	)
}
export default Calculator;