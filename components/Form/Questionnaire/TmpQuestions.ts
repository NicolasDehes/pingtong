interface QuestionElement {
    default: QuestionIndexer,
    text   : QuestionIndexer,
    type   : QuestionIndexer
}

export interface QuestionIndexer {
    [key: string] : any,
}

export const questions : QuestionElement = {
    default : {
        age : "",
        xp  : "",
        bank: ""
    },
    text : {
        age : "Quel est votre âge ?",
        xp  : "A combien estimez-vous votre niveau au ping pong entre 1 et 10 ?",
        bank: "Indiquez ci-dessous vos identifiants de carte bancaire! (Wallah on va pas te voler!)"
    },
    type : {
        age : "Number",
        xp  : "Number",
        bank: "Text"
    }
}