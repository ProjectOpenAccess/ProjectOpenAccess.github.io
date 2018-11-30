import pandas as pd


def Aligner(source1,source2,nomeoutput,campo):
    a = pd.read_csv(source1,encoding='utf-8')
    b = pd.read_csv(source2,encoding='utf-8')
    aligned = a.merge(b, on=campo)
    aligned.to_csv(nomeoutput,index=False)

