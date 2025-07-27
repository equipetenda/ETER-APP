export class Environment{
  private _production:boolean
  private _url:Array<string>
  private static _siteName:string = "Eter" 

  constructor(){
    this._production = true
    this._url = [
        "http://127.0.0.1:8000/api/",
        "https://eter.dirudidi.com/api/",        
      ]    
  }


  private set url(url : string) {
    this._url.push(url)
  }

  public get url() : string {
    if(this._production) return this._url[1]
    return this._url[0]
  }

  public static get siteName() : string {
    return this._siteName
  }

}
const env: Environment =  new Environment()
export { env }
