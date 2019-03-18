import { spawn } from 'child_process';

export async  function exec (cmd: string, ...args: string[]): Promise<{stdout: string, code: number}>
{
  return new Promise(resolve=>{

	args = args || []

	var child = spawn(cmd, args, {
		stdio: [
			0, // use parents stdin for child
			1, // use parent's stdout stream - IMPORTANT if we dont do this things like the spinner will break the automation.
			2  // fs.openSync('err.out', 'w') // direct child's stderr to a file
		]
  });
  let stdout: string=''
  
  child.on('stdout', function(data){
    stdout+=data.toString()
  })
	child.on('close', function(code, signal)
	{
		resolve({stdout, code}); 
	});
  return child;
})
  
};