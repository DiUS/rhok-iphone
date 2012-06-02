require 'net/http'
require 'json'

endpoint = "http://api.sensis.com.au/ob-20110511/test/search" 

key = "jx3fpbttj8pf68a6ywcnaqpz"
query = "fencing contractors"

#woodend!!
location = "-37.3568115234,144.5272674561"

url = "#{endpoint}?key=#{key}&query=#{URI.encode(query)}&location=#{URI.encode(location)}"

response = Net::HTTP.get_response(URI.parse(url))

data = response.body

result = JSON.parse(data)

filtered = result["results"].select{ |a| a["primaryContacts"].any?{ |h| h["type"] == "PHONE" } }

name_nums = filtered.collect{ |result| { result["name"] => result["primaryContacts"].select{ |h| h["type"] == "PHONE" }.first["value"] } }

puts name_nums.sort_by{ |h| h.keys.first }

