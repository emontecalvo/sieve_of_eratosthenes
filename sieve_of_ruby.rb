def sieve_try(max)
  prime_num = []
  is_prime = []

  max.times { is_prime << true }

  i = 2
  while i < is_prime.length
    if is_prime[i] == true
      prime_num << i

      multiple_of_i = i * 2
      while multiple_of_i < max
        is_prime[multiple_of_i] = false
        multiple_of_i += i
      end
    end
    i += 1
  end
  puts " prime num is:"
  p prime_num
end

x = sieve_try(100)