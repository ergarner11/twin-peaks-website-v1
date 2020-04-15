/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


function password() 
{
    
	var password;
    
	var correct="TwinPeaks";

    

	password=prompt('Please enter your password to view this page','');

  
  
	if (password.trim()===correct)
        
		window.open('contract.html','_blank');
    
	else
        
		alert('Incorrect password!');

}

function moreInformation()
{

	var w=window.open('assets/contractH.pdf','_blank');

}
