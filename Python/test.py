import pandas as pd

# Création d'un DataFrame de démonstration
data = {'A': [1, 2, 2, 3, 4],
        'B': ['foo', 'bar', 'foo', 'baz', 'qux']}
df = pd.DataFrame(data)

# Suppression des doublons du DataFrame
df_no_duplicates = df.drop_duplicates()
print("DataFrame sans doublons :")
print(df_no_duplicates)
