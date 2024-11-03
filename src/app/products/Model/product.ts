export interface product
{

  id?:number,
  title:string,
  price:number,
  description:string,
  category:string,
  image:string,
  rating?:rate

}
export interface rate{
  rate:number,
  count:number
}