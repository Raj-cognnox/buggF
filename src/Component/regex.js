export const validEmail = new RegExp( '^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$');
export const validPassword = new RegExp('^(?=.*?[A-Za-z])(?=.*?[0-9]).{6,}$');
export const validPassport = new RegExp("^([A-Z a-z]){1}([0-9]){7}$");
export const validPancard = new RegExp(/^([a-zA-Z]){5}([0-9]){4}([a-zA-Z]){1}?$/);
export const validIdentityCard = new RegExp("^([0-9]){12}$");
export const validName = new RegExp("^([A-Z a-z])+$");   
export const numberid = new RegExp("^([0-9])"); 
export const accountnumber = new RegExp("^([0-9])"); 
export const ifsccode = new RegExp("^([A-Z a-z]){1}([0-9]){7}$");
export const Uerlid = new RegExp (/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g); 





export const coinName = new RegExp ('^([A-Za-z-_]*)')
export const contractAddress = new RegExp ('^0x([A-Fa-f0-9]{40})$')