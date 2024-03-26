export interface IMovie{
    id:number;
    genres: {id: number, name: string }[];
    original_title:string;
    overview:string;
    popularity:number;
    poster_path:string;
    release_date:string;
    vote_average:number;
    homepage:string;
}