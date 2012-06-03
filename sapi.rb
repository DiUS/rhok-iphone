require 'sinatra'
require 'net/http'
require 'json'

endpoint = "http://api.sensis.com.au/ob-20110511/test/search" 
key = "jx3fpbttj8pf68a6ywcnaqpz"

get '/sapi' do

  # woodend!! http://0.0.0.0:4567/sapi?category=fencing&location=-37.3568115234,144.5272674561
  url = "#{endpoint}?key=#{key}&query=#{URI.encode(params[:category])}&location=#{URI.encode(params[:location])}"

  response = Net::HTTP.get_response(URI.parse(url))
  result = JSON.parse(response.body)
  filtered = result["results"].select{ |a| a["primaryContacts"].any?{ |h| h["type"] == "PHONE" } }
  name_nums = filtered.collect{ |result| { result["name"] => result["primaryContacts"].select{ |h| h["type"] == "PHONE" }.first["value"] } }

  name_nums.sort_by{ |h| h.keys.first }.to_json

end
