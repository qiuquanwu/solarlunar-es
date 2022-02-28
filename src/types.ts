
export declare interface Solar2lunar{
    lYear: number;
    lMonth: number;
    lDay: number;
    animal: string;
    monthCn: string;
    dayCn: string;
    cYear: number;
    cMonth: number;
    cDay: number;
    gzYear: string;
    gzMonth: string;
    gzDay: string;
    isToday: boolean;
    isLeap: boolean;
    nWeek: number;
    ncWeek: string;
    isTerm: boolean;
    term: string;
}

export declare interface SolarLunar{
    solar2lunar:(year:number,month:number,day:number)=>Solar2lunar|number;
    lunar2solar:(year:number,month:number,day:number,isLeapMonth:boolean)=>Solar2lunar|number;
    zhi:string[];
    lunarInfo:number[];
    solarMonth:number[];
    gan:string[];
    animals:string[];
    lTermInfo:string[];
    nStr1:string[];
    nStr2:string[];
    nStr3:string[];
    nStr4:string[];
    lYearDays:(year:number)=>number,
    leapMonth:(year:number)=>number;
    leapDays:(year:number)=>number;
    monthDays:(year:number,month:number)=>number;
    getTerm:(year:number,month:number)=>number;
    toChinaMonth:(year:number)=>string|number;
    toChinaDay:(year:number)=>string|number;
    getAnimal:(year:number)=>string|number;
    toGanZhi:(offset:number)=>string|number;
    solarDays:(year:number,month:number)=>number;
    toChinaYear:(year:number)=>string|number;
    lunarTerm:string[]
}