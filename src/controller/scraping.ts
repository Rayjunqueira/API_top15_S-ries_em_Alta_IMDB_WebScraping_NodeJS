import * as cheerio from 'cheerio';
import { Request, Response } from "express";
import axios from 'axios';


class ScrapingRaking { 
    async index(req: Request, res: Response) {
        const items: object [] = [];

        try {
            await axios(process.env.URL as string).then(res => {
                const data = res.data;
                const $ = cheerio.load(data);
            
                var cheerioData = [...$('.lister-list>tr')].map((e, i) => {
                    if (i < 15) {
                        const ranking = i + 1;
                        const title = $(e).find('.titleColumn a').text().trim();
                        const year = $(e).find('.titleColumn span').text().trim();
                        items.push({ranking, title, year});
                    }
                })
            })        
            return res.status(200).json(items);
        } catch (err) {
            return res.status(500).json(err);
        }
    }
}
 
 
export default new ScrapingRaking();