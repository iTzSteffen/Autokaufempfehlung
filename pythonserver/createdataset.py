from __future__ import absolute_import, division, print_function, unicode_literals

import numpy as np
import pandas as pd
import os
import tensorflow as tf
import sklearn as sklearn
from tensorflow import feature_column
from tensorflow import keras
from tensorflow.keras import layers
from sklearn.model_selection import train_test_split

try:
    import simplejson as json
except:
    import json

print(tf.__version__)
#tf.enable_eager_execution()
#tf.executing_eagerly()
URL = './pythonserver/Traininsdaten.csv'
dataframe = pd.read_csv(URL)
#dataframe.head()

train, test = train_test_split(dataframe, test_size=0.2)
train, val = train_test_split(train, test_size=0.2)
print(len(train), 'train examples')
print(len(val), 'validation examples')
print(len(test), 'test examples')

def df_to_dataset(dataframe, shuffle=True, batch_size=32):
  dataframe = dataframe.copy()
  labels = dataframe.pop('target')
  ds = tf.data.Dataset.from_tensor_slices((dict(dataframe), labels))
  if shuffle:
    ds = ds.shuffle(buffer_size=len(dataframe))
  ds = ds.batch(batch_size)
  return ds
batch_size = 120 # A small batch sized is used for demonstration purposes
train_ds = df_to_dataset(train, batch_size=batch_size)
val_ds = df_to_dataset(val, shuffle=False, batch_size=batch_size)
test_ds = df_to_dataset(test, shuffle=False, batch_size=batch_size)

for feature_batch, label_batch in train_ds.take(1):
  print('Every feature:', list(feature_batch.keys()))
  print('A batch of ages:', feature_batch['Alter'])
  print('A batch of targets:', label_batch )

feature_columns = []
for header in ['Geschlecht','Alter','Familienstand','Hobby','Budget','Beruf','Grund','Kilometer','Bildungsstand','Kinder']:
  feature_columns.append(feature_column.numeric_column(header))
feature_layer =  tf.keras.layers.DenseFeatures(feature_columns)


model = tf.keras.Sequential([
  feature_layer,
 # Adds a densely-connected layer with 64 units to the model:
  layers.Dense(64, activation='relu', input_shape=(10,)),
# Add another:
  layers.Dense(64, activation='relu'),
# Add a softmax layer with 10 output units:
  layers.Dense(15, activation='softmax')])


model.compile(optimizer='adam',
              loss='binary_crossentropy',
              metrics=['accuracy'])

model.fit(train_ds,
          validation_data=val_ds,
          epochs=5)


loss, accuracy = model.evaluate(test_ds)
print("Accuracy", accuracy)

def readFile():
  with open("./pythonserver/data/userinput.json", "r") as read_stock_file:
    json_string = json.load(read_stock_file)
    print(json_string)
  return(json_string)

json_string = readFile()


geschlecht = json_string['geschlecht']
alter =  int(json_string['alter'])
beziehungsstatus =  json_string['beziehungsstatus']
hobby =  json_string['hobby']
budget = int(json_string['budget'])
beruf =  json_string['beruf']
grund =  json_string['grund']
jahreskm =  int(json_string['jahreskm'])
bildungsstand =  json_string['bildungsstand']
kinder =  int(json_string['kinder'])

if os.path.exists("./pythonserver/data/userinput.json"):
  os.remove("./pythonserver/data/userinput.json")
else:
  print('File does not exists')

data=[[geschlecht],[alter],[beziehungsstatus],[hobby],[budget],[beruf],[grund],[jahreskm],[bildungsstand],[kinder]]
result = model.predict(data, batch_size=1)
print(result[0])
i = 0
while i < 15:
  print(result[0][i])
  if result[0][i] == 1.0:
    result = {"ergebnis": i}
    i = 15
    with open('Netzoutput.json', 'w') as outfile:
     json.dump(result, outfile)
  i +=1
