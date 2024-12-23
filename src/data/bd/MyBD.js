
const MyBD = () => {
    const users = [
        {
                id:1,
                nome:"teste1",
                cpf:"12345678900",
                codigo: "1234567890",
                plano: "mensal",
                messes: [{
                    mes:"Janeiro",
                    status:"pago",
                    vencimento:"2024-01-26"
                }, {
                    mes:"Fevereiro",
                    status:"pago",
                    vencimento:"2024-02-26"

                },{
                    mes:"Março",
                    status:"pendente",
                    vencimento:"2024-03-26"

                },{
                    mes:"Abril",
                    status:"pendente",
                    vencimento:"2024-04-26"

                },
                {
                    mes:"Maio",
                    status:"pendente",
                    vencimento:"2024-05-26"

                },{
                    mes:"Junho",
                    status:"pendente",
                    vencimento:"2024-06-26"

                },{
                    mes:"Julho",
                    status:"pendente",
                    vencimento:"2024-07-26"

                },{
                    mes:"Agosto",
                    status:"pendente",
                    vencimento:"2024-08-26"

                }, {
                    mes:"Setembro",
                    status:"pendente",
                    vencimento:"2024-09-26"

                },{
                    mes:"Outubro",
                    status:"pendente",
                    vencimento:"2024-10-26"

                },{
                    mes:"Novembro",
                    status:"pendente",
                    vencimento:"2024-11-26"

                },{
                    mes:"Dezembro",
                    status:"pendente",
                    vencimento:"2024-12-26"

                }
            ],
        },
        {
            id:2,
            nome:"teste2",
            cpf:"122345678900",
            codigo: "1234567890",
            plano: "semestre",
            messes: [{
                mes:"Janeiro",
                status:"pago",
                vencimento:"2024-01-26"
            }, {
                mes:"Fevereiro",
                status:"pago",
                vencimento:"2024-02-26"

            },{
                mes:"Março",
                status:"pendente",
                vencimento:"2024-03-26"

            },{
                mes:"Abril",
                status:"pago",
                vencimento:"2024-04-26"

            },
            {
                mes:"Maio",
                status:"pago",
                vencimento:"2024-05-26"

            },{
                mes:"Junho",
                status:"pago",
                vencimento:"2024-06-26"

            },{
                mes:"Julho",
                status:"pago",
                vencimento:"2024-07-26"

            },{
                mes:"Agosto",
                status:"pago",
                vencimento:"2024-08-26"

            }, {
                mes:"Setembro",
                status:"pago",
                vencimento:"2024-09-26"

            },{
                mes:"Outubro",
                status:"pago",
                vencimento:"2024-10-26"

            },{
                mes:"Novembro",
                status:"pago",
                vencimento:"2024-11-26"

            },{
                mes:"Dezembro",
                status:"pago",
                vencimento:"2024-12-26"

            }
        ],
    },
    {
            id:3,
            nome:"teste3",
            cpf:"12345678900",
            codigo: "12334567890",
            plano: "mensal",
            messes: [{
                mes:"Janeiro",
                status:"pago",
                vencimento:"2024-01-26"
            }, {
                mes:"Fevereiro",
                status:"pago",
                vencimento:"2024-02-26"

            },{
                mes:"Março",
                status:"pendente",
                vencimento:"2024-03-26"

            },{
                mes:"Abril",
                status:"pago",
                vencimento:"2024-04-26"

            },
            {
                mes:"Maio",
                status:"pago",
                vencimento:"2024-05-26"

            },{
                mes:"Junho",
                status:"pago",
                vencimento:"2024-06-26"

            },{
                mes:"Julho",
                status:"pago",
                vencimento:"2024-07-26"

            },{
                mes:"Agosto",
                status:"pago",
                vencimento:"2024-08-26"

            }, {
                mes:"Setembro",
                status:"pago",
                vencimento:"2024-09-26"

            },{
                mes:"Outubro",
                status:"pago",
                vencimento:"2024-10-26"

            },{
                mes:"Novembro",
                status:"pago",
                vencimento:"2024-11-26"

            },{
                mes:"Dezembro",
                status:"pago",
                vencimento:"2024-12-26"

            }
        ],
    },
        {
            id:4,
            nome:"teste4",
            cpf:"12345678900",
            codigo: "12344567890",
            plano: "anual",
            messes: [{
                mes:"Janeiro",
                status:"pago",
                vencimento:"2024-01-26"
            }, {
                mes:"Fevereiro",
                status:"pago",
                vencimento:"2024-02-26"

            },{
                mes:"Março",
                status:"pago",
                vencimento:"2024-03-26"

            },{
                mes:"Abril",
                status:"pago",
                vencimento:"2024-04-26"

            },
            {
                mes:"Maio",
                status:"pago",
                vencimento:"2024-05-26"

            },{
                mes:"Junho",
                status:"pago",
                vencimento:"2024-06-26"

            },{
                mes:"Julho",
                status:"pago",
                vencimento:"2024-07-26"

            },{
                mes:"Agosto",
                status:"pago",
                vencimento:"2024-08-26"

            }, {
                mes:"Setembro",
                status:"pago",
                vencimento:"2024-09-26"

            },{
                mes:"Outubro",
                status:"pago",
                vencimento:"2024-10-26"

            },{
                mes:"Novembro",
                status:"pago",
                vencimento:"2024-11-26"

            },{
                mes:"Dezembro",
                status:"pago",
                vencimento:"2024-12-26"

            }
        ],
    },
]
    return users
}

export default MyBD;