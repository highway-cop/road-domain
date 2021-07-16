declare namespace road.domain {

    export interface Accident {

        _id?: import('bson').ObjectId;

        br: string;

        causa_acidente: string;

        classificacao_acidente: string;

        condicao_metereologica: string;

        data: Date;

        delegacia: string;

        dia_semana: string;

        fase_dia: string;

        feridos: string;

        feridos_graves: string;

        feridos_leves: string;

        horario: string;

        id_prf: string;

        ignorados: string;

        ilesos: string;

        km: string;

        latitude: number;

        longitude: number;

        mortos: string;

        municipio: string;

        pessoas: string;

        regional: string;

        sentido_via: string;

        tipo_acidente: string;

        tipo_pista: string;

        tracado_via: string;

        uf: string;

        uop: string;

        uso_solo: string;

        veiculos: string;

    }

    export interface AccidentByCityResponse {

        date: string;

        city: string;

        road: string;

        km: string;

        type: string;

        reason: string;

        location: {

            lat: number;

            lng: number;

        }

    }

}
