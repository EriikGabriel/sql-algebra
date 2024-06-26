"use client"

import { __CHR } from "@constants/text"
import { useEditorContext } from "@contexts/EditorContext"
import { cn } from "@lib/utils"
import { Keys } from "./Keys"

export function ExpressionKeys() {
  const { editable } = useEditorContext()

  return (
    <div className={cn(editable ? "flex" : "hidden", "w-full justify-center")}>
      <div className="grid grid-rows-2 grid-flow-col-dense gap-3">
        <Keys
          name="Projeção"
          desc="π lista_atributos(relação)"
          script={`π<sub>${__CHR}</sub>()`}
        >
          π
        </Keys>
        <Keys name="Igualdade" script={`=`} className="text-2xl">
          =
        </Keys>
        <Keys
          name="Seleção"
          desc="σ condição_seleção(relação)"
          script={`σ<sub>${__CHR}</sub>()`}
        >
          σ
        </Keys>

        <Keys name="Diferente de" script={`≠`} className="text-2xl">
          ≠
        </Keys>
        <Keys
          name="Produto Cartesiano"
          desc="relação 1 × relação 2"
          script={`×`}
        >
          ×
        </Keys>
        <Keys name="Menor que" script={`<`}>
          {"<"}
        </Keys>
        <Keys
          name="Renomeação"
          desc="ρS(B1,B2, ..., Bn)(relação)"
          script={`ρ<sub>${__CHR}()</sub>()`}
        >
          ρ
        </Keys>
        <Keys name="Maior que" script={`>`}>
          {">"}
        </Keys>
        <Keys
          name="União"
          desc="relação 1 ∪ relação 2"
          script={`∪`}
          className="text-2xl"
        >
          ∪
        </Keys>
        <Keys name="Menor ou igual que" script={`≤`} className="text-2xl">
          ≤
        </Keys>
        <Keys
          name="Interseção"
          desc="relação 1 ∩ relação 2"
          script={`∩`}
          className="text-2xl"
        >
          ∩
        </Keys>
        <Keys name="Maior ou igual que" script={`≥`} className="text-2xl">
          ≥
        </Keys>
        <Keys name="Diferença" desc="relação 1 − relação 2" script={`−`}>
          −
        </Keys>
        <Keys name="Disjunção" script={`∨`} className="text-2xl">
          ∨
        </Keys>

        <Keys name="Divisão" desc="relação 1 ÷ relação 2" script={`÷`}>
          ÷
        </Keys>
        <Keys name="Conjunção" script={`∧`} className="text-2xl">
          ∧
        </Keys>
        <Keys
          name="Junção Natural"
          desc="relação 1 ⨝ condição_junção relação 2"
          script={`⨝<sub>${__CHR}</sub>${__CHR}`}
          className="text-2xl"
        >
          ⨝
        </Keys>
        <Keys name="Negação" script={`¬`} className="text-2xl">
          ¬
        </Keys>
        <Keys
          name="Junção Externa Esquerda"
          desc="relação 1 ⟕ condição_junção relação 2"
          script={`⟕<sub>${__CHR}</sub>${__CHR}`}
          className="text-2xl"
        >
          ⟕
        </Keys>
        <Keys
          name="Função Agregada"
          desc="atributos_agrupamento Ƒ funções_agregação(relação)"
          script={`Ƒ<sub>${__CHR}</sub>()`}
        >
          Ƒ
        </Keys>
        <Keys
          name="Junção Externa Direita"
          desc="relação 1 ⟖ condição_junção relação 2"
          script={`⟖<sub>${__CHR}</sub>${__CHR}`}
          className="text-2xl"
        >
          ⟖
        </Keys>
        <Keys name="Média" desc="AVG(x)" className="text-xs " script={`AVG()`}>
          AVG
        </Keys>
        <Keys
          name="Junção Externa Completa"
          desc="relação 1 ⟗ condição_junção relação 2"
          script={`⟗<sub>${__CHR}</sub>${__CHR}`}
          className="text-2xl"
        >
          ⟗
        </Keys>
        <Keys name="Mínimo" desc="MIN(x)" className="text-xs" script={`MIN()`}>
          MIN
        </Keys>
        <Keys
          name="Atribuição"
          desc="S ← relação"
          script={`←`}
          className="text-2xl"
        >
          ←
        </Keys>
        <Keys name="Máximo" desc="MAX(x)" className="text-xs" script={`MAX()`}>
          MAX
        </Keys>
        <Keys name="Parenteses Esquerdo" script={`(`}>
          (
        </Keys>
        <Keys name="Soma" desc="SUM(x)" className="text-xs" script={`SUM()`}>
          SUM
        </Keys>
        <Keys name="Parenteses Direito" script={`)`}>
          )
        </Keys>
        <Keys
          name="Contagem"
          desc="CNT(x)"
          className="text-xs"
          script={`CNT()`}
        >
          CNT
        </Keys>
      </div>
    </div>
  )
}
