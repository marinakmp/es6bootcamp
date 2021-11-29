const [ state, getState ] = useState( "Initial" );

// COMPLETE THE FUNCTION:
function useState( value ){
    return [ value, function(){ alert(state) } ];
}

console.log( state, getState );
//=> "Initial", function(){ alert(state); }
