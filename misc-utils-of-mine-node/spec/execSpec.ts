import { exec } from '../src/execute';

describe('exec', ()=>{
  it('code 0', async done=>{
    const {stdout, code} = await exec('node', '-e', "console.log('hello')")
    expect(code).toBe(0)
    expect(stdout).toContain('hello')
    done()
  })
  it('code 1', async done=>{
    const {stdout, code} = await exec('node', 'not existing')
    expect(code).not.toBe(0)
    done()
  })
})