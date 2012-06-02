require 'net/http'
require 'json'

endpoint = "http://api.sensis.com.au/ob-20110511/test/search" 

key = "jx3fpbttj8pf68a6ywcnaqpz"
query = "fencers"

location = "-37.877089,145.165358" 

url = "#{endpoint}?key=#{key}&query=#{URI.encode(query)}&location=#{URI.encode(location)}"

response = Net::HTTP.get_response(URI.parse(url))

data = response.body

result = JSON.parse(data)

y = result["results"].collect{ |r| r["primaryContacts"] }

p "*"*30


nums = []

y.each{ |a| a.each{|h| nums << h["value"] if h.values.include? "PHONE" } }

puts nums

