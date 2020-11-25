import { Link } from './../models/link';
import {Request, Response} from 'express';

const links: Link[] = [];
let nextId: number = 0;

function generateCode() {
    let text: string = '';
    const possible:string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstvwxyz0123456789';

    for (let i=0; i<5; i++)
        text += possible.charAt( Math.floor( Math.random() * possible.length ) );

    return text;
}

function getRoot(req: Request, res: Response) {
    res.send('app funcionando');
}

function getLink(req: Request, res: Response) {
    res.send('getLink');
}

function postLink(req: Request, res: Response) {
    const link = req.body as Link;
    link.id = ++nextId;
    link.code = generateCode();
    link.hits = 0;

    links.push(link);

    res.status(201).json(link);
}

function hitLink(req: Request, res: Response) {
    res.send('hitLink');
}

export default {
    getRoot,
    getLink,
    postLink,
    hitLink
}