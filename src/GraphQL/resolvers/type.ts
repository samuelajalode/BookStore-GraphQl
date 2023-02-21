

export interface Author {
    name: string,
    email: string,
    password: string,
    phonenumber: string,
    id: string,
    verified: boolean,
    salt: string,
    otp: number,
    otp_expiry: string
};

export interface Authorlist{
    input: Author
}

export interface Updateaut{
    name: string,
    email: string,
    password: string,
    phonenumber: string,
    id: string,
    verified: boolean,
    salt: string,
    otp: number,
    otp_expiry: string
}

export interface Updateauthor{
    input: Updateaut
}

export interface Book{
    Title: string,
    datePublished: Date,
    Description:  string,
    pageCount: number,
    Genre: string,
    id: string,
    Publisher: string,
    authorid: string
}

export interface CreateBook{
    input: Book
}

export interface Updatebk{
    Title: string,
    datePublished: Date,
    Description:  string,
    pageCount: number,
    Genre: string,
    id: string,
    Publisher: string,
    authorid: string
}

export interface Updatebook{
    input: Updatebk
}

export interface GetSinA{
    id: string
}

export interface DelAut{
    id: string
}

export interface GetBk{
    id: string
}

export interface DelBk{
    id: string
}

