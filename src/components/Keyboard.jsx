import React from "react";
import CalcButton from "./CalcButton";

function Keyboard() {
    return (
        <div>
            <CalcButton data-operacao="simples" id="clear">
                C
            </CalcButton>
            <CalcButton data-operacao="simples" id="oposto">
                ±
            </CalcButton>
            <CalcButton data-operacao="complexa" id="porcentagem">
                %
            </CalcButton>
            <CalcButton data-operacao="complexa" id="divisao">
                ÷
            </CalcButton>
            <CalcButton data-number="true" id="sete">
                7
            </CalcButton>
            <CalcButton data-number="true" id="oito">
                8
            </CalcButton>
            <CalcButton data-number="true" id="nove">
                9
            </CalcButton>
            <CalcButton data-operacao="complexa" id="multiplicacao">
                x
            </CalcButton>
            <CalcButton data-number="true" id="quatro">
                4
            </CalcButton>
            <CalcButton data-number="true" id="cinco">
                5
            </CalcButton>
            <CalcButton data-number="true" id="seis">
                6
            </CalcButton>
            <CalcButton data-operacao="complexa" id="subtracao">
                -
            </CalcButton>
            <CalcButton data-number="true" id="um">
                1
            </CalcButton>
            <CalcButton data-number="true" id="dois">
                2
            </CalcButton>
            <CalcButton data-number="true" id="tres">
                3
            </CalcButton>
            <CalcButton data-operacao="complexa" id="soma">
                +
            </CalcButton>
            <CalcButton data-number="true" id="virgula">
                ,
            </CalcButton>
            <CalcButton data-number="true" id="zero">
                0
            </CalcButton>
            <CalcButton id="igual">=</CalcButton>
        </div>
    );
}

export default Keyboard;
